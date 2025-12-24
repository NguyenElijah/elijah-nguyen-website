import requests
import json
import os
import time

class PersonalBest:
  def __init__(self, category, wpm, rank, total):
    self.category = category
    self.wpm = wpm
    self.rank = rank
    self.total = total
  
  def __str__(self):
    return f"category: {self.category}, WPM: {self.wpm}, rank: {self.rank}/{self.total}"
  
  def to_dict(self):
    return {
        "category": self.category,
        "wpm": self.wpm,
        "rank": self.rank,
        "total": self.total
    }
  
def filterForDefaultCategory(personal_bests):
  for personal_best in personal_bests:
    if personal_best['language'] == "english" and personal_best['punctuation'] == False and personal_best["numbers"] == False:
      return personal_best

def getPersonalBests(): 
  token = os.environ['APE_KEY']
  url = os.environ['API_URL']

  apiHeaders = {'Authorization': 'ApeKey ' + token}


  response = requests.get(url, headers=apiHeaders)

  if (response.status_code == 200):
    data = response.json()['data']
    personal_bests = data['personalBests']['time']
    leaderboard_rankings = data['allTimeLbs']['time']

    personal_best_fifteen = filterForDefaultCategory(personal_bests['15'])
    ranking_fifteen = leaderboard_rankings['15']['english']
    personal_best_sixty = filterForDefaultCategory(personal_bests['60'])
    ranking_sixty = leaderboard_rankings['60']['english']

    pb_fifteen = PersonalBest('15', round(personal_best_fifteen['wpm']), ranking_fifteen['rank'], ranking_fifteen['count'])
    pb_sixty = PersonalBest('60', round(personal_best_sixty['wpm']), ranking_sixty['rank'], ranking_sixty['count'])

    timestamp = int(time.time())
    response = {
      "statusCode": 200,
      "body": { 
        "timestamp": timestamp,
        "personalBests": [pb_fifteen.to_dict(), pb_sixty.to_dict()]
      }
    }

    return response

  else:
    return {
      "statusCode": 500,
      "message": "Error retrieving typing data"
    }


def lambda_handler(event, context):
  return getPersonalBests()
