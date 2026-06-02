import type { Socket } from '../java/net/Socket.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Route } from '../okhttp3/Route.d.ts'
export interface Connection extends Object{
    handshake(): Handshake | null;
    protocol(): Protocol;
    route(): Route;
    socket(): Socket;
}