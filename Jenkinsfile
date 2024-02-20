pipeline {
    agent { 
        node {
            label 'my_pc'
            }
      }
    triggers {
        pollSCM '* * * * *'
    }
     stages {
        stage('Build') {
            steps {
                echo "Building.."
                bat "java --version"
            }
        }
        stage('Test') {
            steps {
                echo "Testing.." 
            }
        }
        stage('Deliver') {
            steps {
                echo "Delivery.."
            }
        }
    }
}
