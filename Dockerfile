# Serves the static World Explorer files with nginx.
# This is what gives Koyeb something to actually run — a folder of plain
# HTML/CSS/JS with no server isn't a deployable service by itself.
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
