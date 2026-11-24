
pipeline {
    agent any

   
        stage('Run Tests') {
    steps {
        sh 'npm test'
    }
}

    }

    post {
        success {
            echo 'Build and tests completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
