import type { RealmsServiceException } from '../../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class LongRunningTask extends Object implements Runnable {
    static setScreen(paramscreen: Screen): void;
    constructor()
    // private aborted: boolean;
    abortTask(): void;
    aborted(): boolean;
    error(ex: RealmsServiceException): void;
    error(ex: Exception): void;
    error(errorMessage: Component): void;
    getTitle(): Component;
    init(): void;
    tick(): void;
}