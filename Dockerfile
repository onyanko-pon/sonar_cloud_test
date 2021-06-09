FROM sonarsource/sonar-scanner-cli

CMD npm install && npm run test && ls && sonar-scanner -Dproject.settings=sonar-project.properties