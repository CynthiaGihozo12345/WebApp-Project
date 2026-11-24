
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t webapp:1.0 .'
            }
        }

        stage('Deploy with Docker') {
            steps {
                sh '''
                    docker rm -f webapp-container || true
                    docker run -d \
                    --name webapp-container \
                    -p 3000:3000 \
                    webapp:1.0
                '''
            }
        }

    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
