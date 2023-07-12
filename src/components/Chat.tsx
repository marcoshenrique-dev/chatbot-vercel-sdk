'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

import {useChat} from 'ai/react';
import { ScrollArea } from "./ui/scroll-area";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Chat() {

  const {messages, input, handleInputChange, handleSubmit} = useChat({
    api: '/api/chat'
  });

  return (
    
      <Card className="w-[70%]">
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>CHAT AI</CardTitle>
            <CardDescription>Using vercel sdk to create a chat bot</CardDescription>
          </div>

          <ThemeSwitcher />
        </CardHeader>

        <CardContent>

          <ScrollArea className="w-full h-[600px] pr-4">
            {
              messages.map(message => {
                return (
                  <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                    {message.role === 'user' && (
                        <Avatar>
                        <AvatarFallback>MH</AvatarFallback>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/51785898?v=4"/>
                      </Avatar> 
                    )}

                    {message.role === 'assistant' && (
                        <Avatar>
                        <AvatarFallback>AI</AvatarFallback>
                        <AvatarImage src="https://static.vecteezy.com/system/resources/previews/021/608/790/original/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg"/>
                      </Avatar> 
                    )}
                
                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">{message.role ===  'user' ? 'User': 'AI'}:</span>
                      {message.content}
                  </p>
              </div>
                )
              })
          }
          </ScrollArea>
        </CardContent>

        <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
              <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}/>
              <Button type="submit">Send</Button>
            </form>
        </CardFooter>
      </Card>
    
  )
}