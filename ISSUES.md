Assumptions: 

Account number length is inclusive of the limits.
The error messages have to be specific for the country.
The account number length does not include swift code length.

Failures:
1) Bank API for Australia should thow error for account number length less than 6
  Message:
    Expected $.error = 'Length of account_number should be between 7 and 11 when bank_country_code is 'US'' to equal 'Length of account_number should be between 6 and 9 when bank_country_code is 'AU''.

- Wrong error message for country AU.

2) Bank API for Australia should thow error for account number length greater than 9
  Message:
    Expected $.error = 'Length of account_number should be between 7 and 11 when bank_country_code is 'US'' to equal 'Length of account_number should be between 6 and 9 when bank_country_code is 'AU''.

- Wrong error message for country AU.

3) Bank API should throw error for swift code of length 9
  Message:
    Expected 200 to be 400.
  Message:
    Expected object to have properties
        error: 'Length of 'swift_code' should be either 8 or 11'
    Expected object not to have properties
        success: 'Bank details saved'
- Should not be saving bank details for invalid swift code  

4) Bank API for US should throw error when aba is not supplied
  Message:
    Expected 200 to be 400.
  Message:
    Expected object to have properties
        error: 'Length of 'aba' should be 9'
    Expected object not to have properties
        success: 'Bank details saved'

- Should not save bank details when aba is not supplied.

5) Bank API for US should throw error to save bank details of length 20 and aba length 9
  Message:
    Expected $.error = 'Length of account_number should be between 7 and 11 when bank_country_code is 'US'' to equal 'Length of account_number should be between 1 and 17 when bank_country_code is 'US''.

- Wrong error for account number length mismatch.

6) Bank API for China should thow error for account number of length less than 8
  Message:
    Expected $.error = 'Length of account_number should be between 7 and 11 when bank_country_code is 'US'' to equal 'Length of account_number should be between 8 and 20 when bank_country_code is 'CN''.

- Wrong error message

7) Bank API for China should thow error for account number of length greater than 20
  Message:
    Expected $.error = 'Length of account_number should be between 7 and 11 when bank_country_code is 'US'' to equal 'Length of account_number should be between 8 and 20 when bank_country_code is 'CN''.
- Wrong error message

8) Bank API for China should work for account number of length 15
  Message:
    Expected 400 to be 200.
  Message:
    Expected object to have properties
        success: 'Bank details saved'
    Expected object not to have properties
        error: 'Length of account_number should be between 7 and 11 when bank_country_code is 'US''

- Does not save the bank details for valid account number for country CN

9) Bank API for China should work for account number of length 20
  Message:
    Expected 400 to be 200.
  Message:
    Expected object to have properties
        success: 'Bank details saved'
    Expected object not to have properties
        error: 'Length of account_number should be between 7 and 11 when bank_country_code is 'US''

- Does not save the bank details for valid account number for country CN.

50 specs, 9 failures
Finished in 6.22 seconds
Randomized with seed 16337 (jasmine --random=true --seed=16337)
npm ERR! Test failed.  See above for more details.