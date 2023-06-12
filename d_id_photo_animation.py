import requests

def upload_image():

    url = "https://api.d-id.com/images"

    body = {
        "image" : "",
    }

    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data"
    }

    response = requests.post(url, headers=headers, body = body)

    print(response.text)

def upload_audio():
    url = "https://api.d-id.com/audios"

    body = {
        "audio" : "",
    }

    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data"
    }

    response = requests.post(url, headers=headers, body = body)

def create_talk():
    url = "https://api.d-id.com/talks"

    payload = {
        "source_url": "<YOUR_IMAGE_URL>",
        "driver_url": "<YOUR_AUDIO_URL>",
        "script": {
            "type": "audio",
            "audio_url": "",
        },
        "config": {
            "fluent": "false",
            "pad_audio": "0.0"
        }
    }

    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)

def get_talk():
    import requests

    url = "https://api.d-id.com/talks?limit=100"

    headers = {"accept": "application/json"}

    response = requests.get(url, headers=headers)

    print(response.text)