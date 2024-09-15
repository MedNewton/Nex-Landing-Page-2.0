declare module 'three/examples/jsm/loaders/RGBELoader' {
    import { TextureLoader } from 'three';
  
    export class RGBELoader extends TextureLoader {
      constructor();
      setDataType(dataType: number): this;
    }
  }
  