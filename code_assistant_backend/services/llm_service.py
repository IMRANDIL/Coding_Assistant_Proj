from langchain.chains import LLMChain
from langchain.llms import OpenAI

def process_extracted_text(text, question):
    llm = OpenAI(temperature=0.7)
    chain = LLMChain(llm=llm, prompt=f"Text: {text}\nQuestion: {question}\nAnswer:")
    
    # Generate the response
    response = chain.run()
    return response
