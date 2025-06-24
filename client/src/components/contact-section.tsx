import { useState } from "react";
import { Mail, Github, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-6">Let's work together!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-500 text-lg" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:priyanshumishra4070@gmail.com" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    priyanshumishra4070@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="text-gray-700 dark:text-gray-300 text-lg" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/Priyanshu-coder-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    @Priyanshu-coder-ai
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Youtube className="text-red-500 text-lg" />
                </div>
                <div>
                  <h4 className="font-medium">YouTube</h4>
                  <p className="text-slate-600 dark:text-slate-400">Meme Channel (Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  className="mt-2"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bubble-button w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-10"
              >
                <Send className="w-4 h-4 mr-2 relative z-20" />
                <span className="relative z-20">{isSubmitting ? "Sending..." : "Send Message"}</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
