FROM amazonlinux:latest

RUN curl --silent --location https://rpm.nodesource.com/setup_14.x | bash -
RUN yum install nodejs -y 
COPY ./src ./
CMD node sample.js
