import OpenAI from "openai";
import fs from "fs";
import path from "path";

const speechFile = path.resolve("./assets/speech.mp3");

async function transcribe(input) {
    const response = await client.audio.transcriptions.create({
        model: "gpt-4o-mini-transcribe",
        file: ""
    })

    return response.text
}

async function request(query) {
    const response = await client.responses.create({
        input: query,
        model: "gpt-4o-mini"
    })

    return response
}

async function tts(input, prompt=null) {

    const mp3 = await openai_client.audio.speech.create({
        model: "gpt-4o-mini-tts",
        voice: "nova",
        input: input,
        prompt: prompt
    })

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
}
