import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SocketPerformancePreferences extends Object implements Cloneable, Builder<SocketPerformancePreferences> {
    static newBuilder(): SocketPerformancePreferences;
    constructor()
    readonly bandwidth: number;
    readonly connectionTime: number;
    readonly latency: number;
    apply(socket: Socket): void;
    build(): SocketPerformancePreferences;
    protected clone(): Object;
    getBandwidth(): number;
    getConnectionTime(): number;
    getErrorPrefix(): string;
    getLatency(): number;
    isValid(): boolean;
    setBandwidth(bandwidth: number): void;
    setConnectionTime(connectionTime: number): void;
    setLatency(latency: number): void;
    toString(): string;
}