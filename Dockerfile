FROM node:18

WORKDIR /app

COPY package*.json ./

# Installer les dépendances sans celles de développement
RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
