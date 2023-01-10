from otterai import OtterAI
from dotenv import load_dotenv
import os
load_dotenv()
otter = OtterAI()

user = os.getenv('USERN')
passw = os.getenv('PASSW')

otter.login(user, passw)


def getSpeechID(speech):
    # return speech['speech_id']
    return speech['download_url'].split('/')[-1]


speeches = otter.get_speeches()['data']['speeches']
speech_ids = [getSpeechID(s) for s in speeches]

for speech_id in speech_ids:
    speech = otter.get_speech(speech_id)['data']['speech']
    print(f"{speech['transcripts'][0]['transcript']=}\n")
    break
