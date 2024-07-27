import styled from "styled-components";
import { lato, montserrat, poppins } from "./font"; // Adjust the import path if necessary

interface PoppinsTextProps {
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: number;
  color?: string;
}

export const PoppinsBoldText = styled.p<PoppinsTextProps>`
  font-family: ${poppins.style.fontFamily};
  font-weight: ${(props) => props.fontWeight || 700}; 
  font-size: ${(props) => props.fontSize || '30px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || 'inherit'};
`;

export const PoppinsLightText = styled.p<PoppinsTextProps>`
  font-family: ${poppins.style.fontFamily};
  font-weight: 300;
  font-size: ${(props) => props.fontSize || '18px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || 'inherit'};
`;

export const PoppinsMediumText = styled.p<PoppinsTextProps>`
  font-family: ${poppins.style.fontFamily};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || '18px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || 'inherit'};
`;

export const LatoLightText = styled.p<PoppinsTextProps>`
  font-family: ${lato.style.fontFamily};
  font-weight: 300; // Adjusted to closest available weight
  font-size: ${(props) => props.fontSize || '18px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || '#FFFFFF'};
`;

export const LatoMediumText = styled.p<PoppinsTextProps>`
  font-family: ${lato.style.fontFamily};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || '16px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || '#FFFFFF'};
`;

export const MontserratMediumText = styled.p<PoppinsTextProps>`
  font-family: ${montserrat.style.fontFamily};
  font-weight: 700;
  font-size: ${(props) => props.fontSize || '16px'}; 
  font-style: ${(props) => props.fontStyle || 'normal'};
  color: ${(props) => props.color || 'inherit'};
`;
