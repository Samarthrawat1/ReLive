"""
Used to find the distinc voices in an audio file 
"""


import replicate

output = replicate.run(
    "meronym/speaker-transcription:9950ee297f0fdad8736adf74ada54f63cc5b5bdfd5b2187366910ed5baf1a7a1",
    input={"audio": open("path/to/file", "rb")}
)
print(output)