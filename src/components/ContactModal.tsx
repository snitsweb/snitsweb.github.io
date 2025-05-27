
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-900">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-6">
          <div className="text-center text-gray-600 mb-6">
            Let's connect! Feel free to reach out through any of these channels.
          </div>
          
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full gap-3 h-12 text-left justify-start hover:bg-blue-50"
              onClick={() => window.open("mailto:julian.li@example.com", "_blank")}
            >
              <Mail size={20} className="text-blue-600" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-500">julian.li@example.com</div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="w-full gap-3 h-12 text-left justify-start hover:bg-blue-50"
              onClick={() => window.open("https://linkedin.com/in/julian-li", "_blank")}
            >
              <Linkedin size={20} className="text-blue-600" />
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-gray-500">linkedin.com/in/julian-li</div>
              </div>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
