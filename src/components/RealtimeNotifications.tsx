
import { useState, useEffect } from 'react';
import { Bell, MapPin } from 'lucide-react';

const notifications = [
  { id: 1, message: "Jean D. vient de commander 2000L", location: "Paris 15ème", time: "Il y a 2 min" },
  { id: 2, message: "Marie L. a commandé 1500L", location: "Versailles", time: "Il y a 5 min" },
  { id: 3, message: "Pierre M. vient de commander 3000L", location: "Boulogne", time: "Il y a 8 min" },
  { id: 4, message: "Sophie R. a commandé 1800L", location: "Saint-Denis", time: "Il y a 12 min" },
];

const RealtimeNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    // Initial show
    setTimeout(() => setIsVisible(true), 1000);

    return () => clearInterval(interval);
  }, []);

  const notification = notifications[currentNotification];

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="bg-green-100 p-2 rounded-full">
            <Bell className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {notification.message}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500">{notification.location}</p>
              <span className="text-xs text-gray-400">•</span>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeNotifications;
