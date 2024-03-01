Feature: Swag Labs - Login - Positive
    
  @positive
  Scenario: As a standard_user, I want to log in successfully 
    Given Aditya is on the login page
    When Aditya login with "standard_user" credential 
    Then Aditya should be on home page