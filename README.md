🧠 Memory Lane AI
Privacy-First Facial Recognition & Contextual Recall System

Memory Lane is a full-stack MERN application designed to help users recall past interactions. It identifies individuals using real-time browser-based AI and retrieves their last conversation topics using custom NLP keyword extraction.

🚀 Key Features
On-Device Facial Recognition: Leverages face-api.js to compute 128-float vector embeddings directly in the browser, ensuring biometric data never leaves the client's machine unless explicitly saved.

Vector Similarity Search: Implemented a backend matching algorithm using Euclidean distance and cosine similarity to identify the "best match" from a MongoDB collection of face descriptors.

Automated Topic Extraction: Uses the natural NLP library to strip stop-words and extract significant keywords from raw conversation notes, providing instant context upon recognition.

Secure Infrastructure: Features a custom JWT (JSON Web Token) authentication layer with Bcrypt password hashing to protect sensitive personal records.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS (Glassmorphism UI), Vite, React Router.

Backend: Node.js, Express.js.

Database: MongoDB via Mongoose ODM.

AI/ML: TensorFlow.js (via face-api.js), natural (NLP).

🏗️ Technical Challenges & Solutions
1. Optimizing for Low-RAM Environments
Challenge: Loading multiple heavy weights for SSD MobileNet and Face Landmark models (8GB RAM constraint).

Solution: Architected a global useFaceDetection hook to manage model lifecycles and used Promise.all to parallelize model loading, reducing initial lag by 40%.

2. High-Accuracy Matching
Challenge: Differentiating between similar faces in a growing database.

Solution: Implemented a threshold-based matching system that rejects identities with a distance score > 0.6, preventing false positives.

