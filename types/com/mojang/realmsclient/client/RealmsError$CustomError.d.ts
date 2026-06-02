import type { RealmsError } from '../../../../com/mojang/realmsclient/client/RealmsError.d.ts'
import type { RealmsHttpException } from '../../../../com/mojang/realmsclient/exception/RealmsHttpException.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RealmsError$CustomError extends Record implements RealmsError {
    static BODY_TAG: string;
    static CLOSING_BODY_TAG: string;
    static LOGGER: Logger;
    static NO_MESSAGE: Component;
    static RETRY_MESSAGE: Component;
    static SERVICE_BUSY: RealmsError$CustomError;
    static configurationError(): RealmsError$CustomError;
    static connectivityError(paramexception: RealmsHttpException): RealmsError$CustomError;
    static htmlPayload(paramstatusCode: number, parampayload: string): RealmsError$CustomError;
    static noPayload(paramstatusCode: number): RealmsError$CustomError;
    static parse(paramhttpCode: number, parampayload: string): RealmsError;
    static retry(paramstatusCode: number): RealmsError$CustomError;
    static unknownCompatibilityResponse(paramresponse: string): RealmsError$CustomError;
    // private httpCode: number;
    // private payload: Component;
    equals(o: Object | null): boolean;
    errorCode(): number;
    errorMessage(): Component;
    hashCode(): number;
    httpCode(): number;
    logMessage(): string;
    payload(): Component;
    toString(): string;
}