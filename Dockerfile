# Get that node, don't make them install that
FROM node:8.14.0-alpine

# Run that command, don't make them run that
CMD ["npx", "drpoindexter"]
