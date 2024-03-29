export interface DogI {
  bred_for: string;
  breed_group: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  life_span: string;
  name: string;
  origin: string;
  reference_image_idr: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
}
