export interface ForgotPasswordStepProps {
    onNext: (email: string) => void;
    onBack: () => void;
}

export interface EmailSentStepProps {
    email: string;
    onNext: () => void;
}

export interface EnterOTPStepProps {
    email: string;
    onNext: () => void;
}

export interface ResetPasswordStepProps {
    onComplete: () => void;
}

export interface ResetPasswordStepProps {
    onComplete: () => void;
}

export interface OTPInputProps {
    value: string[];
    onChange: (value: string[]) => void;
}