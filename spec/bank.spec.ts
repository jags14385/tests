import * as APIClient from '../clients/bankAPIClient';

describe('Bank API',() => {

    beforeEach(async () => {
        let bankAPIClient = new APIClient.BankAPIClient();
        let response = await bankAPIClient.saveDetails();
        console.log(response);
    });
    
    it('should return successful repsonse for valid details',async () => {
            
    })
});