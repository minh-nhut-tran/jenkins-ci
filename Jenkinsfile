pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                    sudo rm -rf /var/www/html
                    sudo cp -ra /dist/* /var/www/html
                '''
            }
        }
    }
}

