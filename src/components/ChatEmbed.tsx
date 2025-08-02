import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare, Users } from "lucide-react";
import chatIconsImg from "@/assets/chat-icons.jpg";

interface User {
  id: string;
  name: string;
  matchPercentage: number;
  lastMessage: string;
  timeAgo: string;
  tags: string[];
  passKey: string;
  isOnline: boolean;
}

interface ChatEmbedProps {
  selectedUser: User | null;
}

const ChatEmbed = ({ selectedUser }: ChatEmbedProps) => {
  const [isEmbedReady, setIsEmbedReady] = useState(false);

  const getConversationForUser = (userId: string) => {
    const conversations = {
      "MOON_1305": [
        { text: "Hi there! I saw we matched with 92% compatibility 🎉", isMe: false, time: "10:30 AM" },
        { text: "Hey! That's amazing! What's your sleep schedule like?", isMe: true, time: "10:32 AM" },
        { text: "I'm definitely a night owl 🦉 Usually sleep around 1-2 AM. You?", isMe: false, time: "10:35 AM" },
        { text: "Perfect! Same here. Are you okay with having friends over occasionally?", isMe: true, time: "10:37 AM" },
        { text: "Absolutely! I love hosting movie nights. How do you feel about cleanliness?", isMe: false, time: "10:40 AM" },
        { text: "I'm pretty neat! Clean as you go type. Do you cook much?", isMe: true, time: "10:42 AM" },
        { text: "Yes! I love cooking and sharing meals. We could meal prep together!", isMe: false, time: "10:45 AM" }
      ],
      "CLOUD_7097": [
        { text: "Hello! Excited about our 85% match rate!", isMe: false, time: "2:15 PM" },
        { text: "Hi! Yes, I'm looking forward to learning more about you.", isMe: true, time: "2:18 PM" },
        { text: "What's your study routine like? I'm pretty focused during exam weeks.", isMe: false, time: "2:20 PM" },
        { text: "I prefer quiet study time too. Do you listen to music while studying?", isMe: true, time: "2:22 PM" },
        { text: "Sometimes lo-fi, but mostly silence. How about room temperature preferences?", isMe: false, time: "2:25 PM" },
        { text: "I like it slightly cool, around 68-70°F. Is that okay with you?", isMe: true, time: "2:27 PM" },
        { text: "Perfect! I'm the same way. Do you have any pets or planning to get any?", isMe: false, time: "2:30 PM" }
      ],
      "SUN_5672": [
        { text: "Hey roomie! 78% compatibility sounds promising!", isMe: false, time: "11:45 AM" },
        { text: "Hello! I'd love to know about your daily routine.", isMe: true, time: "11:48 AM" },
        { text: "I'm an early bird! Up by 6 AM for morning jogs. Hope that's not too loud?", isMe: false, time: "11:50 AM" },
        { text: "Not at all! I wake up early too. Do you have any dietary restrictions?", isMe: true, time: "11:52 AM" },
        { text: "I'm vegetarian and try to eat healthy. You?", isMe: false, time: "11:55 AM" },
        { text: "I'm flexible with diet! How do you feel about sharing kitchen space?", isMe: true, time: "11:57 AM" },
        { text: "Great! I usually meal prep on Sundays. We can coordinate cooking times.", isMe: false, time: "12:00 PM" }
      ],
      "STAR_4357": [
        { text: "Hi! Our 88% match looks really good!", isMe: false, time: "4:20 PM" },
        { text: "Hello! Tell me about your lifestyle preferences.", isMe: true, time: "4:23 PM" },
        { text: "I'm pretty social but respect quiet time. Love weekend game nights!", isMe: false, time: "4:25 PM" },
        { text: "That sounds fun! How often do you have people over?", isMe: true, time: "4:27 PM" },
        { text: "Maybe once or twice a week, usually Friday/Saturday. Always give heads up!", isMe: false, time: "4:30 PM" },
        { text: "That works for me! What about cleaning and chores?", isMe: true, time: "4:32 PM" },
        { text: "I'm all for a cleaning schedule! Fair division of tasks works best.", isMe: false, time: "4:35 PM" }
      ],
      "CLOUD_8433": [
        { text: "Hey there! 83% compatibility - let's chat!", isMe: false, time: "7:10 PM" },
        { text: "Hi! What are you studying?", isMe: true, time: "7:13 PM" },
        { text: "Computer Science! You? I sometimes code late but I use headphones.", isMe: false, time: "7:15 PM" },
        { text: "Business major here! No worries about late coding. Do you smoke?", isMe: true, time: "7:17 PM" },
        { text: "Nope, completely smoke-free. How about alcohol? I occasionally have wine.", isMe: false, time: "7:20 PM" },
        { text: "That's totally fine! I'm not a big drinker but no issues with it.", isMe: true, time: "7:22 PM" },
        { text: "Perfect! Want to discuss budget and bills splitting?", isMe: false, time: "7:25 PM" }
      ]
    };
    
    return conversations[userId as keyof typeof conversations] || [
      { text: "Hey! Looking forward to getting to know you better!", isMe: false, time: "12:00 PM" }
    ];
  };

  // This is where you'll embed your external chat application
  // For now, we're showing a placeholder with instructions

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-warm">
        <div className="text-center p-8 max-w-md">
          <div className="mb-6">
            <img 
              src={chatIconsImg} 
              alt="Chat illustration" 
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-card"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Select a match to start chatting
          </h3>
          <p className="text-muted-foreground">
            Choose someone from your matches to begin a conversation and see if you're roommate compatible!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Chat header */}
      <div className="p-4 border-b border-border bg-card shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{selectedUser.name}</h3>
              <p className="text-sm text-muted-foreground">
                {selectedUser.matchPercentage}% compatible • PassKey: {selectedUser.passKey}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${selectedUser.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span className="text-xs text-muted-foreground">
              {selectedUser.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>

      {/* Embed area - This is where you'll integrate your external chat */}
      <div className="flex-1 relative bg-warm-cream">
        {!isEmbedReady ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="p-8 max-w-md mx-4 text-center shadow-card">
              <div className="mb-6">
                <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Chat Integration Area
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                This is where your external chat application will be embedded. 
                You can integrate Firebase Realtime Chat, Socket.io, or any other chat solution here.
              </p>
              
              <div className="space-y-3 text-left text-sm text-muted-foreground">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Integration Instructions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Replace this component's content with your chat iframe/component</li>
                    <li>Pass selectedUser data to your chat application</li>
                    <li>Use selectedUser.id for user identification</li>
                    <li>Use selectedUser.passKey for authentication if needed</li>
                  </ul>
                </div>
              </div>

              <Button 
                onClick={() => setIsEmbedReady(true)}
                className="mt-4"
                size="sm"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Simulate Chat Load
              </Button>
            </Card>
          </div>
        ) : (
          <div className="h-full p-4">
            {/* Simulated chat interface - Replace this with your actual chat embed */}
            <div className="h-full bg-light-beige rounded-lg border border-border p-4 flex flex-col">
              <div className="mb-4 p-3 bg-warm-accent/20 rounded-lg">
                <p className="text-sm text-foreground">
                  🎬 <strong>Demo Mode:</strong> This simulates where your external chat application would appear.
                </p>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto">
                {getConversationForUser(selectedUser.id).map((message, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg max-w-xs shadow-sm ${
                      message.isMe 
                        ? 'bg-primary text-primary-foreground ml-auto' 
                        : 'bg-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className={`text-xs ${
                      message.isMe 
                        ? 'text-primary-foreground/80' 
                        : 'text-muted-foreground'
                    }`}>
                      {message.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-muted rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>For Integration:</strong> Replace this entire div with your chat component or iframe.
                  <br />
                  <span className="text-xs">
                    File location: <code>src/components/ChatEmbed.tsx</code>
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatEmbed;