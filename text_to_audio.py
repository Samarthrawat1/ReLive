import replicate

output = replicate.run(
    "afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71",
    custom_voice = "c/some_path",
    # (Optional) Create a custom voice based on an mp3 file of a speaker. 
    # Audio should be at least 15 seconds, only contain one speaker, and be in mp3 format. Overrides the `voice_a` input.
    input={"text": "The expressiveness of autoregressive transformers is literally nuts! I absolutely adore them."}
)
print(output)

# this takes around 4 minutes to generate one response and that too half of it. I am tring different things. and will let you know how it works out