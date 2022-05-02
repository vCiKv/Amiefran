import Image from "next/image";
//https://drive0.google.com/uc?export=view&id=
export default function  Gallery(){
const imageData = [  
        {url:'https://drive.google.com/uc?export=view&id=1nWdRFVNLA_6VQNdE-IpasQU9Ae55UXwU'},
        {url:'https://drive.google.com/uc?export=view&id=1l4gOKMdGqwAPnhS79R9RaLQYJN3roHCY'},
        {url:'https://drive.google.com/uc?export=view&id=1mZ2WXx1bWEMp90mLle2kjbP-YridwJu4'},
        {url:'https://drive.google.com/uc?export=view&id=1mB5BgTf1451YEoHYqM_DhuW3DJ0mCWn6'},
        {url:'https://drive.google.com/uc?export=view&id=10yMR_oDDS_SUe_NcoU8RrJ0KbnceHLZS'},
        {url:'https://drive.google.com/uc?export=view&id=1rTo-cgBCDCPv1RaZNB0Vu-YySxxVB7hE'},
        {url:'https://drive.google.com/uc?export=view&id=1rS0k8P6M0nfzoTdgyUnt5NzxjClQgYOk'},
        {url:'https://drive.google.com/uc?export=view&id=1NHFx9zP8k8LKsV9bp_NMrCRAExfEIKkC'},
        {url:'https://drive.google.com/uc?export=view&id=1DPUYofjcXo6ZvOXfzBUnoGNtQNG7bew1'},
        {url:'https://drive.google.com/uc?export=view&id=1OnJ0g316GIS0_qnoXHOL0KUTRHTvT-m4'},
        {url:'https://drive.google.com/uc?export=view&id=1fkgV2aLq7wK8K6mMySOyw-TcN3FCHNmZ'},
        {url:'https://drive.google.com/uc?export=view&id=1-NgxgdGx8uX6eG5qJEJ-NPFdrhASWyJE'},
        {url:'https://drive.google.com/uc?export=view&id=1BFrwYWUz-JdVZvBzAzP76_OGEw2LtDII'},
        {url:'https://drive.google.com/uc?export=view&id=1A78Q44r0rd7j6UIMrgC5E43_r02F1Rkv'},
        {url:'https://drive.google.com/uc?export=view&id=11CqFV3ZLew2VFH5RmnV-iND2Lnbu2O-r'},
        {url:'https://drive.google.com/uc?export=view&id=1XYW0xsWsCCicnkiotY826Pq0b-A4g5D6'},
        {url:'https://drive.google.com/uc?export=view&id=1kNnD-pS8z2h2wYdVdfWRHHcw_xRTZytv'},
        {url:'https://drive.google.com/uc?export=view&id=1nn78JSTpjE_dw2yYcx-4aLniBuSs72KI'},
        {url:'https://drive.google.com/uc?export=view&id=1MAdM4OZQOfYqveLUkt0uP2YmS3PNDwXe'},
        {url:'https://drive.google.com/uc?export=view&id=1eLDLo7RtjjVTpzOCEGrfj7ytik-TX9hi'},
        {url:'https://drive.google.com/uc?export=view&id=1ZJOrjKFLE8XAmxaqPFp1zNh2ct8nt74l'},
        {url:'https://drive.google.com/uc?export=view&id=1Mv06tbEG0SLMO2t2a165SruhesxyyyiT'},
        {url:'https://drive.google.com/uc?export=view&id=13yA-Ep2qV0DM0cPbFGGdiPPRfvhso1xL'},
        {url:'https://drive.google.com/uc?export=view&id=1EAKUJNu7uzNwforw-2kgOiFgsPIw57Xn'},
        {url:'https://drive.google.com/uc?export=view&id=1rHOgP_vvUiS2Mmb5xicXErb0fHCvdFKe'},
        {url:'https://drive.google.com/uc?export=view&id=1vgqD6u-R3B-NpCLWahrhNB1u90V26d5g'},
        {url:'https://drive.google.com/uc?export=view&id=11kGspEeAXh4O2_GzKs_-vcTqAv2grZD6'},
        {url:'https://drive.google.com/uc?export=view&id=1qV_URaQREOMaxSPNvGeYs2-uJkqSo84I'},
        {url:'https://drive.google.com/uc?export=view&id=1iZTamOcCRghJRhnstCV1AgAsKh0mKbu0'},
        {url:'https://drive.google.com/uc?export=view&id=1zAbsnMgtEEQiJcoUwrXSp7Q7jAtJuikR'},
        {url:'https://drive.google.com/uc?export=view&id=1Y6Sbw-0xGkA_cDCkTn0npENyJFyH8tId'},
        {url:'https://drive.google.com/uc?export=view&id=1wQKjpC--zpm_mgHaM4h8WPmyOcawAeq-'},
        {url:'https://drive.google.com/uc?export=view&id=1O-3Xbvve_Q5a2CCZNp-teDQy8rhsbxLK'},
        {url:'https://drive.google.com/uc?export=view&id=16kxDyNo89CFmorVz-L9Quox3V9buqm2Z'},
        {url:'https://drive.google.com/uc?export=view&id=1PTecRbtfIHfVDUWUBAkjg7SI17lhUGPV'},
        {url:'https://drive.google.com/uc?export=view&id=1uIx1vBfCdZZWiXrmAJZa4mPwqe7o9867'},
        {url:'https://drive.google.com/uc?export=view&id=1X9C_NWAKXGLKGbgVBclFjZWlV3YYbMfT'},
        {url:'https://drive.google.com/uc?export=view&id=1CRpgNlHSfRfmwWe0llQwNY_Fd1Qiu681'},
        {url:'https://drive.google.com/uc?export=view&id=1QxlH7QnNMua8yc2etgyvdLs-xiH3_Hft'},
        {url:'https://drive.google.com/uc?export=view&id=1MBfkeV4FWMVwmfsR3Pp1GaSF7PoUZZcL'},
        {url:'https://drive.google.com/uc?export=view&id=1cODuMqr4ZxRJoP1FoMWcbKPj8TmPjwQq'},
        {url:'https://drive.google.com/uc?export=view&id=1Mz74gItwAnXnP2oqVCWm54P_2jjmDNlj'},
        {url:'https://drive.google.com/uc?export=view&id=1O8XbpKdfKW5U5r3uc-TpwRtTANAvxE9a'},
        {url:'https://drive.google.com/uc?export=view&id=1JE0QIbGps28rf_2p-T-3_9ojHSTf60g2'},
        {url:'https://drive.google.com/uc?export=view&id=1s3LjDFHmyLGm92ZL1F4cC33zuScgsRky'},
        {url:'https://drive.google.com/uc?export=view&id=153yFDedUdSKuaWkr6fr5SxmAp-Oz2uMD'},
        {url:'https://drive.google.com/uc?export=view&id=1rvz1QgBkAJM08i145txtTHlH9zJQ77R-'},
        {url:'https://drive.google.com/uc?export=view&id=16KTlTbn25JuF1JHACy7saAesA0gUwKZm'},
        {url:'https://drive.google.com/uc?export=view&id=1_92jnWYj98VRIRSAUx62efahCs_JINLN'},
        {url:'https://drive.google.com/uc?export=view&id=1MPa2QRiGhi_47A1l1THDWjUBVeoMSGQy'},
        {url:'https://drive.google.com/uc?export=view&id=1ZsuZqZjSxEZeqOAsST_qHJgKjjVaiBE0'},
        {url:'https://drive.google.com/uc?export=view&id=10w8NeIJrqvDQuQLGk47Gu6GBjRQxz7tN'},
        {url:'https://drive.google.com/uc?export=view&id=1WWRYjTqYidoW-gb3azoLaQou8zIIbInf'},
        {url:'https://drive.google.com/uc?export=view&id=1HWnkDjU8GPNZv8NlpfqqZKOYEZqVoKw1'},
        {url:'https://drive.google.com/uc?export=view&id=1buOO8VVtM635SKdtAKHH5sOKveM6m_AQ'},
        {url:'https://drive.google.com/uc?export=view&id=1frRNlkVPAgj3CBXJzSZuWi7MSREgZK6x'},
        {url:'https://drive.google.com/uc?export=view&id=1uNuVs-FbVfw4UThYwUEYZrGQEG18ezes'},
        {url:'https://drive.google.com/uc?export=view&id=1IsEtgyUGD1k0BmKcmA6lCv3BwXonlD0X'},
        {url:'https://drive.google.com/uc?export=view&id=1DwxR3ic1pAN1ezxnjfsZwv32Xy-1w_Mn'},
        {url:'https://drive.google.com/uc?export=view&id=1_ga8dMO8UmdgukU-4zlVvovrgogdDGbD'},
        {url:'https://drive.google.com/uc?export=view&id=1Wp0uVYBvrtR5JShvIpGV8S6ieOkF9HG4'},
        {url:'https://drive.google.com/uc?export=view&id=1HmAPJnFsc9GD-L373xPw0Hwq6NOD_RJb'},
        {url:'https://drive.google.com/uc?export=view&id=14szY9VAEnLgZZisV1r2Oi8mJFTz0z6OM'},
        {url:'https://drive.google.com/uc?export=view&id=1XGeY2uIVKMQ07sWG2xeDKJ5CxdSzXmIJ'},
        {url:'https://drive.google.com/uc?export=view&id=1fDXdisVtXFfpac4SbL861Xj5RZ1iCeeX'},
        {url:'https://drive.google.com/uc?export=view&id=1PaNV91TX_bVP78UOC4oaTqM5JP4x7fY1'},
        {url:'https://drive.google.com/uc?export=view&id=1oaSAVlWRQ2lqSjSLf-SjxUGCh6Rz2hfv'},
        {url:'https://drive.google.com/uc?export=view&id=1vhlIskMVR0vbfg8WSEAUNFfmCNIUpnPJ'},
        {url:'https://drive.google.com/uc?export=view&id=13A9EGiJp-weEci87ALSHkAVm_NVPrl5S'},
        {url:'https://drive.google.com/uc?export=view&id=1KQBCL3TTozRjpY32wAKi3JcJ0d78mHOp'},
        {url:'https://drive.google.com/uc?export=view&id=1_Td76q4Oz8DTgDHMEm6ZysxRDom6o4Y9'},
        {url:'https://drive.google.com/uc?export=view&id=1xdiOic3vpPsoi4hvmDZMRXjBMgNYqlO2'},
        {url:'https://drive.google.com/uc?export=view&id=1AwJzZurhXdYB72M8WkiKrHFfIQDOUdXo'},
        {url:'https://drive.google.com/uc?export=view&id=1AsAUY5pB9ce-nz-87umy-SSmFRPVwgjG'},
        {url:'https://drive.google.com/uc?export=view&id=1aHfZFizawKz-sZ1yD9aF2VQ4yyCq6LFa'},
        {url:'https://drive.google.com/uc?export=view&id=1ygoKk9UF5iuPwIzkYFDVA42K1l1LXdk2'},
        {url:'https://drive.google.com/uc?export=view&id=196GaXpcYcpnZntetXhnto84nEnD4A4Xb'},
        {url:'https://drive.google.com/uc?export=view&id=1K0jxUp0Ei-zK1Y91Bebjgu_-fmgCDvN9'},
        {url:'https://drive.google.com/uc?export=view&id=18shUvc87GiTgaoEz4jAg6G0RoLtM_6ez'},
        {url:'https://drive.google.com/uc?export=view&id=1xDyIkwPvGYa6cj6m97vfK6CZgsJxSeBK'},
        {url:'https://drive.google.com/uc?export=view&id=1CQr_sa-Y4Ml82vKy1_t-fwljA6oMy5Ve'},
        {url:'https://drive.google.com/uc?export=view&id=1jIO-M21ieX_lEeIopCwMlZgDMQ6dzaTQ'},
        {url:'https://drive.google.com/uc?export=view&id=12a4BxbVtLUJljfhGzA0OVUZi42z9F1jl'},
        {url:'https://drive.google.com/uc?export=view&id=1mu5fV2QmW47aup-NARxfrs1P9JUbRTK4'},
        {url:'https://drive.google.com/uc?export=view&id=1YqwhFpdcSRmy32rGJ4-Me3pKjhtiXoJ6'},
        {url:'https://drive.google.com/uc?export=view&id=10KKkhYk5ML-UH3YbomhRWuA-4sY27D15'},
        {url:'https://drive.google.com/uc?export=view&id=1f5R-ZIZn2b9U3eCIqxUb46RuQRgwVuLx'},
        {url:'https://drive.google.com/uc?export=view&id=1TRu6hEEWLQLUb2olfwBiJqzyv_0qr6sf'},
        {url:'https://drive.google.com/uc?export=view&id=1hQGYM0HsEnuvIvm2hNMS3Y7fbE7mxx7B'},
        {url:'https://drive.google.com/uc?export=view&id=1KIMZdk8oWl7v-I6yypc7T90bVfI67xg5'},
        {url:'https://drive.google.com/uc?export=view&id=1UHXAtIxlnUDeQYJ-3wzgSuyKgR1RllNX'},
        {url:'https://drive.google.com/uc?export=view&id=1GVJnzRUFig0hQUup-XXnQw-UDVazedBs'},
        {url:'https://drive.google.com/uc?export=view&id=1GBcY52iG8f174-cKtXS5NOq872jaMpxu'},
        {url:'https://drive.google.com/uc?export=view&id=1h3Qv1HScnxXm5c2VoVfZ9OM_vZ4CjfUD'},
        {url:'https://drive.google.com/uc?export=view&id=1HNichvxrle3g9FtNbcr8L_TQHtuyTMQC'},
        {url:'https://drive.google.com/uc?export=view&id=1gfHMInaUdUxhHxtTMSxdsbcX4_mZgbb5'},
        {url:'https://drive.google.com/uc?export=view&id=1cJxBCvemT6Q_xQIwEMiS5qL3gWcKHDTI'},
        {url:'https://drive.google.com/uc?export=view&id=1YBuJ_D2fXMWolIcYdjCfbK1Ddv5mOFvL'},
        {url:'https://drive.google.com/uc?export=view&id=1CcIniBYV2GI4wlaz2_Uh977dbnKirSxK'},
        {url:'https://drive.google.com/uc?export=view&id=1AtuSnlteBtjQbmxAN8ttyepIihCEIFo_'},
        {url:'https://drive.google.com/uc?export=view&id=1vsNzTQrGuOkX-7rgT_W7pM9kh7Omj0nk'},
        {url:'https://drive.google.com/uc?export=view&id=10Wy4MKkq8U-BS3lXCCRJ9VC5pao-v01i'},
        {url:'https://drive.google.com/uc?export=view&id=1b8wZvnI39SakdkfL_bP9oX3UB-8A6Vq9'},
        {url:'https://drive.google.com/uc?export=view&id=1AtKNiBaosgJCgWy8YpNNXTUZzpqVp21G'},
        {url:'https://drive.google.com/uc?export=view&id=1NMSntZlLjr87qakPYRjkw37PeZf3t9BJ'},
        {url:'https://drive.google.com/uc?export=view&id=1_PkK84VuhZ2GK_bVLnR8LRc1WS_WCKhg'},
        {url:'https://drive.google.com/uc?export=view&id=1op6xrmHGD0w3ctlrWoALyv66KeGOi1J9'},
        {url:'https://drive.google.com/uc?export=view&id=1D7smeMB8IX-GiXycfSlQPf2wwa2KubIR'},
        {url:'https://drive.google.com/uc?export=view&id=1G0D50kgBGMgPfOvMwlamzdpmwP9RRl_a'},
        {url:'https://drive.google.com/uc?export=view&id=1DgmA4thAGSf99ywlj7C4hEjjgi0i8FK7'},
        {url:'https://drive.google.com/uc?export=view&id=1E99cDGPf_9YKncOIhkLdMtLsES2igMxp'},
        {url:'https://drive.google.com/uc?export=view&id=1EvnfmhxAyAxDzNFPLwgK2aAG-OVRsf-k'},
        {url:'https://drive.google.com/uc?export=view&id=14LZ7b0tr8mN270_Y38CrmrCw5P8fSVEN'},
        {url:'https://drive.google.com/uc?export=view&id=1vnbhd1X-lQSqjqzO7ub4kDF-7NGG-LUn'},
        {url:'https://drive.google.com/uc?export=view&id=1v-izkMNJuJ1HiKhmGCEfeqamu3Ma8jCv'},
        {url:'https://drive.google.com/uc?export=view&id=1H4EmTmu_DrsZFfPx8d0cD8Gn7ngSi77a'},
        {url:'https://drive.google.com/uc?export=view&id=1Kv5m6tw-ny_2jW6VLrYm-o05P637T4wo'},
        {url:'https://drive.google.com/uc?export=view&id=1nNzaY5UCjJ2NUTqPP5Zk03gwRi9nI9Nk'},
        {url:'https://drive.google.com/uc?export=view&id=1FUbVsPcWmf_bBfh6U_Rrj3afEa9qTGhX'},
        {url:'https://drive.google.com/uc?export=view&id=1-1kijfz_IrYG-On93CZ4xJ0eT513vxAl'},
        {url:'https://drive.google.com/uc?export=view&id=1ycNhiwL-U6uQSG0AtGGXNXgG9PusLgUt'},
        {url:'https://drive.google.com/uc?export=view&id=1vLH0oTREY3AithE1tAj49vYHZNmI2Lf1'},
        {url:'https://drive.google.com/uc?export=view&id=12TmzJRg_vKmf4NlMbMh9DHNhw3p0nIxi'},
        {url:'https://drive.google.com/uc?export=view&id=1hLOcqnvIL2iXfHsfi_wAxIT5-sjIGXrH'},
        {url:'https://drive.google.com/uc?export=view&id=1h5bDZFdabkmCVQbFuFjOZIclvHPK9QJB'},
        {url:'https://drive.google.com/uc?export=view&id=1ZSBqlkXPNwmdbzlfmPqIe_5imbm1ywkF'},
        {url:'https://drive.google.com/uc?export=view&id=1zWb5x15RsTlw_mH84j1uEWKZ6Kw2Oj86'},
        {url:'https://drive.google.com/uc?export=view&id=1OxT6NSXV8eM8VlBSjWMxDYPsUDJyP42r'},
        {url:'https://drive.google.com/uc?export=view&id=1nCE0dqAzTUfMhOxYaXwPMVhlwA8vllq8'},
        {url:'https://drive.google.com/uc?export=view&id=1ssYQ7JkPe-YmC1qTfutOIr4CHVnOv-wI'},
        {url:'https://drive.google.com/uc?export=view&id=1aw2sbmHJaqPEhfQIXkL65CoU3TLTKUfq'},
        {url:'https://drive.google.com/uc?export=view&id=10ovk_mvk1J1gRPrkktFvpYhCEy1YlaFx'},
        {url:'https://drive.google.com/uc?export=view&id=1AHOI-cDljjo8F8z5DoGpH0VYNLgclZQ0'},
        {url:'https://drive.google.com/uc?export=view&id=1pHMhsUSRErEgcNpt188QHkk45K4adyuB'},
        {url:'https://drive.google.com/uc?export=view&id=1ivuXSd8bPJeIklLve-eCSyIB30_bCVeN'},
        {url:'https://drive.google.com/uc?export=view&id=1RlTD-25DDNGwpzc99tjaQdv5pkTRJNyk'},
        {url:'https://drive.google.com/uc?export=view&id=1yNypPHRC8jOj3_yX7MJrI3pIspk1jyyi'},
        {url:'https://drive.google.com/uc?export=view&id=1dUWsOmWkGJ7Yqz8Y07KBGHwiOFpb110s'},
        {url:'https://drive.google.com/uc?export=view&id=1RC_jtGAGhSZqueff-DCeOUwtxmqWsAHS'},
        {url:'https://drive.google.com/uc?export=view&id=1VJB1DcMARr9uxijebqi-0XmycQBBZZHx'},
        {url:'https://drive.google.com/uc?export=view&id=1nT4wKWbmUJoWGp6sMtaWzm9TYA7M_OGX'},
        {url:'https://drive.google.com/uc?export=view&id=1fOz_fej745KK3OMSLGdyBAURoRMOvOaV'},
        {url:'https://drive.google.com/uc?export=view&id=1WmNHZ-wr8mSPumhiNDD5hvbygioDZ3O6'},
        {url:'https://drive.google.com/uc?export=view&id=1J_7gkcfnZpjaN-AsZt7FmcB0XKKZ5WqV'},
        {url:'https://drive.google.com/uc?export=view&id=1SdnpuOIjDPSjFN52Ls5EWWgiK0h9Lk9L'},
        {url:'https://drive.google.com/uc?export=view&id=1hoCTBmddTSDdKRjR83HSs9x6ZCQkq2uH'},
        {url:'https://drive.google.com/uc?export=view&id=1rbmquW991nyYmLw7ThdnHsgJGiUyOYdD'},
    ]
    return(
        <div className="container">
            <h1 className="is-gold is-size-1 p-3">Our Gallery</h1>
            <div className="columns is-multiline p-3">
                {imageData.map(img=>(
                    <div key={img.url} className="column is-half">
                        <Image src={img.url} width={500} height={500} />
                    </div>
                ))}        
            </div>
        </div>

    )
}
