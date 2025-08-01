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
                <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                  <p className="text-sm">Hi there! I saw we matched with {selectedUser.matchPercentage}% compatibility 🎉</p>
                  <span className="text-xs text-muted-foreground">10:30 AM</span>
                </div>
                
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs ml-auto shadow-sm">
                  <p className="text-sm">Hey! Yes, that's amazing! I'd love to learn more about your living preferences.</p>
                  <span className="text-xs text-primary-foreground/80">10:32 AM</span>
                </div>
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