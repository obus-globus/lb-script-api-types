import type { RealmsError } from '../../../../com/mojang/realmsclient/client/RealmsError.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RealmsError$ErrorWithRawPayload extends Record implements RealmsError {
    static LOGGER: Logger;
    static NO_MESSAGE: Component;
    constructor(httpCode: number, payload: string)
    // private httpCode: number;
    // private payload: string;
    equals(o: Object | null): boolean;
    errorCode(): number;
    errorMessage(): Component;
    hashCode(): number;
    httpCode(): number;
    logMessage(): string;
    payload(): string;
    toString(): string;
}