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
                '''
            }
        }
        stage('Test'){
             agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Test  stage'
                sh '''
                    test dist/index.html
                    npm run test
                '''
            }
        }
        stage('E2E'){
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.52.0-noble'
                }
            }
            steps {
                echo 'Test  E2E'
                echo 'Small changes'
                sh '''
                    npm install serve
                    node_modules/.bin/serve -s dist & sleep 10
                    npx playwright test
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}

