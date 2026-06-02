import type { Messager } from '../../../../../javax/annotation/processing/Messager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MessageRouter extends Object {
    static getMessager(): Messager;
    static setMessager(paramarg0: Messager): void;
    private constructor()
}