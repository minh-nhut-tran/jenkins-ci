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
                cleanWs()
                // sh '''
                //     ls -la
                //     node --version
                //     npm --version
                //     npm ci
                //     npm run build
                //     ls -la
                //     rm -rf /var/www/html/
                //     cp -ra dist/* /var/www/html/
                // '''
            }
        }
    }
}

