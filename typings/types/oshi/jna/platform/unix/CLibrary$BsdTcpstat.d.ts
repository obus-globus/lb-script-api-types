import type { Object } from '../../../../java/lang/Object.d.ts'
export class CLibrary$BsdTcpstat extends Object {
    constructor()
    tcps_accepts: number;
    tcps_connattempt: number;
    tcps_conndrops: number;
    tcps_drops: number;
    tcps_rcvbadoff: number;
    tcps_rcvbadsum: number;
    tcps_rcvmemdrop: number;
    tcps_rcvpack: number;
    tcps_rcvshort: number;
    tcps_sndpack: number;
    tcps_sndrexmitpack: number;
}