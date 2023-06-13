import requests

def voice_clone():
    url = "https://play.ht/api/v2/cloned-voices/instant"

    body = {
        "sample_file" : "", #  audio/wav
        "voice_name" : "" # id for the cloned voice 

    }

    headers = {
        "AUTHORIZATION" : "Bearer c4b9285f106c3a4e5b4c6794f3a01d26",
        "X-USER-ID" : "o9X3lW0h8vNzDQSWRH7CTaRYwVl2",
        "accept": "application/json",
        "content-type": "multipart/form-data"
    }

    response = requests.post(url, headers=headers, body=body)
    print(response.text)

def generate_voice():
    import requests

    url = "https://play.ht/api/v2/tts"

    body = {
        "text" :  "", # text that needs to be converted 
        "voice" : "", # voice ID

    }

    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }

    response = requests.post(url, headers=headers, body = body)

    print(response.text)

def get_generated_voice():
    import requests

    path = {
        "id" : ""
    }

    url = "https://play.ht/api/v2/tts/id"

    headers = {"accept": "text/event-stream"}

    response = requests.get(url, headers=headers, params= path)

    print(response.text)