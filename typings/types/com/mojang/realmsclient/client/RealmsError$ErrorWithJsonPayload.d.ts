import type { RealmsError } from '../../../../com/mojang/realmsclient/client/RealmsError.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RealmsError$ErrorWithJsonPayload extends Record implements RealmsError {
    static LOGGER: Logger;
    static NO_MESSAGE: Component;
    constructor(httpCode: number, code: number, reason: string, message: string)
    // private code: number;
    // private httpCode: number;
    // private message: string;
    // private reason: string;
    code(): number;
    equals(o: Object | null): boolean;
    errorCode(): number;
    errorMessage(): Component;
    hashCode(): number;
    httpCode(): number;
    logMessage(): string;
    message(): string;
    reason(): string;
    toString(): string;
}