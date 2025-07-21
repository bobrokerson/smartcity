pipeline {
    agent any

    stages {
        stage('Clone and Check') {
            steps {
                echo "Cloning repo..."
                script {
                    try {
                        checkout scm
                        echo "OK"
                    } catch (Exception e) {
                        echo "NO"
                        error "Cloning failed: ${e.message}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed."
        }
    }
}