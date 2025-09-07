class WebSocketConnectionManager {
  public roomId: string;
  public messageRecievedCallback: (data: string) => void;

  constructor(roomId: number, messageRecievedCallback: (data: string) => void) {
    this.roomId = String(roomId);
    this.messageRecievedCallback = messageRecievedCallback;
  }

  public connect() {
    const socket = new WebSocket(`ws://192.168.1.133:8000/ws/${this.roomId}`);

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      // const data = JSON.parse(event.data);
      // console.log("Real-time update:", data);
      this.messageRecievedCallback(event.data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };
  }
}

export default WebSocketConnectionManager;
