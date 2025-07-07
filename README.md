# SmartCity Landing Page

![GitHub repo size](https://img.shields.io/github/repo-size/bobrokerson/smartcity)
![Docker Image](https://img.shields.io/badge/Docker-Enabled-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**SmartCity** is a modern landing page designed to showcase tourist routes and collect user requests (advertisements and tour bookings) via email. Built with a focus on simplicity, scalability, and data-driven development, it supports seamless analytics integration and easy deployment using Docker.

## Table of Contents

- [SmartCity Landing Page](#smartcity-landing-page)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Quick Start](#quick-start)
  - [Email workflow](#email-workflow)
  - [License](#license)

## Overview

SmartCity is a lightweight, responsive landing page tailored for promoting tourist routes and capturing user inquiries through an intuitive form. It leverages EmailJS for email submissions, is optimized for analytics with tools like Jupyter and pandas, and is packaged as a Docker image for effortless deployment across environments.

## Features

- **Email Request Submission**: Collects user inquiries and sends them via EmailJS or SMTP.
- **Data-Driven Design**: Structured to support analytics for tracking user interactions and preferences.
- **Dockerized Deployment**: Easily deployable in any environment using a Docker container.
- **Analytics Integration**: Compatible with Jupyter and pandas for in-depth data analysis.
- **Responsive UI**: Clean, modern design optimized for all devices.

## Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Email Service**: EmailJS (with SMTP support)
- **Containerization**: Docker
- **Analytics**: Jupyter, pandas (optional integration)
- **Deployment**: Nginx (via Docker)

## Quick Start

Follow these steps to set up and run the SmartCity landing page locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bobrokerson/smartcity.git
   cd smartcity

2. **Build the Docker Image**:
   ```bash
   docker build -t smartcity .

4. **Run the Docker Container**:
   ```bash
   docker run -p 3333:80 smartcity

5. **Access the Application**: 
   open your browser and navigate to http://localhost:3333.


## Email workflow
The form on the website sends a JSON payload containing the request information to the backend API hosted on Fozzy:
```json
{
  "customerName": "Ivan Ivanov",
  "customerEmail": "ivan.ivanov@gmail.com",
  "tourType": "City Center Tour",
  "message": "I would like a guided tour",
  "source": "smartcity_landing"
}


## License
This project is licensed under the MIT License. See the LICENSE file for details.