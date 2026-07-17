import type { RealmsError } from '../../../../com/mojang/realmsclient/client/RealmsError.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RealmsError$AuthenticationError extends Record implements RealmsError {
    static ERROR_CODE: number;
    static LOGGER: Logger;
    static NO_MESSAGE: Component;
    constructor(message: string)
    // private message: string;
    equals(o: Object | null): boolean;
    errorCode(): number;
    errorMessage(): Component;
    hashCode(): number;
    logMessage(): string;
    message(): string;
    toString(): string;
}