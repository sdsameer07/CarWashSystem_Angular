export interface LoginDto {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
    userId:Number
    userFirstName:string
}