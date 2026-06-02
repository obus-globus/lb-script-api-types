import type { AlgorithmConstraints } from '../../../java/security/AlgorithmConstraints.d.ts'
import type { SNIServerName } from '../../../javax/net/ssl/SNIServerName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SSLParameters extends Object {
    constructor()
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: string[])
    readonly algorithmConstraints: AlgorithmConstraints;
    readonly applicationProtocols: string[];
    readonly cipherSuites: string[];
    readonly enableRetransmissions: boolean;
    // private identificationAlgorithm: string;
    readonly maximumPacketSize: number;
    readonly namedGroups: string[];
    readonly needClientAuth: boolean;
    // private preferLocalCipherSuites: boolean;
    readonly protocols: string[];
    readonly signatureSchemes: string[];
    // private sniMatchers: E[];
    // private sniNames: SNIServerName[];
    readonly wantClientAuth: boolean;
    getAlgorithmConstraints(): AlgorithmConstraints;
    getApplicationProtocols(): string[];
    getCipherSuites(): string[];
    getEnableRetransmissions(): boolean;
    getEndpointIdentificationAlgorithm(): string;
    getMaximumPacketSize(): number;
    getNamedGroups(): string[];
    getNeedClientAuth(): boolean;
    getProtocols(): string[];
    getSNIMatchers(): E[];
    getServerNames(): SNIServerName[];
    getSignatureSchemes(): string[];
    getUseCipherSuitesOrder(): boolean;
    getWantClientAuth(): boolean;
    setAlgorithmConstraints(arg0: AlgorithmConstraints): void;
    setApplicationProtocols(arg0: string[]): void;
    setCipherSuites(arg0: string[]): void;
    setEnableRetransmissions(arg0: boolean): void;
    setEndpointIdentificationAlgorithm(arg0: string): void;
    setMaximumPacketSize(arg0: number): void;
    setNamedGroups(arg0: string[]): void;
    setNeedClientAuth(arg0: boolean): void;
    setProtocols(arg0: string[]): void;
    setSNIMatchers(arg0: E[]): void;
    setServerNames(arg0: SNIServerName[]): void;
    setSignatureSchemes(arg0: string[]): void;
    setUseCipherSuitesOrder(arg0: boolean): void;
    setWantClientAuth(arg0: boolean): void;
}