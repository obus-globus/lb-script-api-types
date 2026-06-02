import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export interface RealmsError extends Object{
    errorCode(): number;
    errorMessage(): Component;
    logMessage(): string;
}