import React, {Component} from 'react';
import './styles.css';
import '../../typeface-roboto';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            nTalhao: '', area: '', produtividadeRealista: '', calculop2: '', nivelFosf: '', nivelMO: '',
            pre: false, plantio: false, pos: false, primeiraAp: false, segundaAp: false, terceiraAp: false, checkedColor: false,
            dosagemPre: 0, dosagemPlantio: 0, dosagemPosPri: 0, dosagemPosSeg: 0, dosagemPosTer: 0, reducaoExtraPre: 0, reducaoExtraPos: 0,
            aumentoExtraPre: 0, aumentoExtraPos: 0,

            reducaoTotal: 0, reducaoPre: 0, reducaoPlantio: 0, aumentoTotal: 0, aumentoPre: 0, aumentoPos: 0, aumentoPlantio: 0
        };
        this.handleChangeTest = this.handleChangeTest.bind(this);
    }

      handleChangeCheck = event => {
        this.setState({
            ...this.state, [event.target.name]: event.target.checked
        });
      }

      handleChangeTest(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      calcular = () =>{
        var multMO = 0;
        if(this.state.nivelMO === 'muitobaixo'){
            multMO = 1.3;
        } else if(this.state.nivelMO === 'baixo'){
            multMO = 1.1;
        } else if(this.state.nivelMO === 'medio'){
            multMO = 1;
        } else if(this.state.nivelMO === 'alto'){
            multMO = 0.9;
        } else if(this.state.nivelMO === 'muitoalto'){
            multMO = 0.7;
        }
        if(this.state.nivelFosf === 'muitobaixo'){
            this.setState({
                reducaoPre: 0 * this.state.dosagemPre,
                reducaoPlantio: 1 * this.state.dosagemPlantio,
                aumentoPre: 0 * this.state.dosagemPre,
                aumentoPlantio: 0.5 * this.state.dosagemPlantio,
                aumentoPos: 1,
                reducaoTotal: (this.state.reducaoPre + this.state.reducaoPlantio) * multMO,
                aumentoTotal: (this.state.aumentoPre + this.state.aumentoPlantio) * multMO
            });
        } else if(this.state.nivelFosf === 'baixo'){
            this.setState({
                reducaoPre: 0 * this.state.dosagemPre,
                reducaoPlantio: 2 * this.state.dosagemPlantio,
                aumentoPre: 0* this.state.dosagemPre,
                aumentoPlantio: 1 * this.state.dosagemPlantio,
                aumentoPos: 1,
                reducaoTotal: (this.state.reducaoPre + this.state.reducaoPlantio) * multMO,
                aumentoTotal: (this.state.aumentoPre + this.state.aumentoPlantio) * multMO
            });
        } else if(this.state.nivelFosf === 'medio'){
            this.setState({
                reducaoPre: 2.5 * this.state.dosagemPre,
                reducaoPlantio: 5 * this.state.dosagemPlantio,
                aumentoPre: 1.25 * this.state.dosagemPre,
                aumentoPlantio: 2.5 * this.state.dosagemPlantio,
                aumentoPos: 1,
                reducaoTotal: (this.state.reducaoPre + this.state.reducaoPlantio) * multMO,
                aumentoTotal: (this.state.aumentoPre + this.state.aumentoPlantio) * multMO
            });
        } else if(this.state.nivelFosf === 'alto'){
            this.setState({
                reducaoPre: 4 * this.state.dosagemPre,
                reducaoPlantio: 8 * this.state.dosagemPlantio,
                aumentoPre: 2 * this.state.dosagemPre,
                aumentoPlantio: 4 * this.state.dosagemPlantio,
                aumentoPos: 1,
                reducaoTotal: (this.state.reducaoPre + this.state.reducaoPlantio) * multMO,
                aumentoTotal: (this.state.aumentoPre + this.state.aumentoPlantio) * multMO
            });
        } else if(this.state.nivelFosf === 'muitoalto'){
            this.setState({
                reducaoPre: 5 * this.state.dosagemPre,
                reducaoPlantio: 10 * this.state.dosagemPlantio,
                aumentoPre: 2.5 * this.state.dosagemPre,
                aumentoPlantio: 5 * this.state.dosagemPlantio,
                aumentoPos: 1,
                reducaoTotal: (this.state.reducaoPre + this.state.reducaoPlantio) * multMO,
                aumentoTotal: (this.state.aumentoPre + this.state.aumentoPlantio) * multMO
            });
        }
      }
    
    render(){

        const {nTalhao} = this.state, {area} = this.state, {produtividadeRealista} = this.state, {calculop2} = this.state, {nivelFosf} = this.state,
                {nivelMO} = this.state, {prePlantio} = this.state, {plantio} = this.state, {posPlantio} = this.state, {dosagemPre} = this.state,
                {dosagemPlantio} = this.state, {dosagemPosPri} = this.state, {dosagemPosSeg} = this.state, {dosagemPosTer} = this.state,
                {primeiraAp} = this.state, {segundaAp} = this.state, {terceiraAp} = this.state, {reducaoExtraPre} = this.state, {reducaoExtraPos} = this.state,
                {aumentoExtraPre} = this.state, {aumentoExtraPos} = this.state;
        
        return(
            <div className="main-list">
                <article>
                    <strong>● Informações necessárias</strong>
                    <div className="form__group">
                        <div className="form__group">
                            <TextField className="form__label" name="nTalhao" onChange={this.handleChangeTest} value={nTalhao} type="number" 
                                        id="standard-basic" label="Nº do Talhão" />
                        </div>
                        <div className="form__group">
                            <TextField className="form__label" name="area" onChange={this.handleChangeTest} value={area} type="number" 
                                        id="standard-basic" label="Área em ha" />
                        </div>
                        <div className="form__group">
                            <TextField className="form__label" name="produtividadeRealista" onChange={this.handleChangeTest} value={produtividadeRealista} type="number" 
                                        id="standard-basic" label="Meta de produtividade realista em kgs/ha" />
                        </div>
                        <div className="form__group">
                            <TextField className="form__label" name="calculop2" onChange={this.handleChangeTest} value={calculop2} type="number" 
                                        id="standard-basic" label="Cálculo de P2O5 em kgs/ha" />
                        </div>
                    </div>
                </article>
                <article>
                    <strong>● Nível de Fósforo (P) no solo, segundo a classificação do Boletim SOJA FMT</strong>
                    <RadioGroup className="form__groupCheck" name="nivelFosf" value={nivelFosf} onChange={this.handleChangeTest}>
                        <FormControlLabel value="muitobaixo" className="checkboxMain" control={<Radio color="primary"/>} label="Muito Baixo" />
                        <FormControlLabel value="baixo" className="checkboxMain" control={<Radio  color="primary"/>} label="Baixo" />
                        <FormControlLabel value="medio" className="checkboxMain" control={<Radio color="primary"/>} label="Médio" />
                        <FormControlLabel value="alto" className="checkboxMain" control={<Radio color="primary"/>} label="Alto" />
                        <FormControlLabel value="muitoalto" className="checkboxMain" control={<Radio color="primary"/>} label="Muito Alto" />
                    </RadioGroup>
                </article>
                <article>
                    <strong>● Nível de Matéria Orgânica (M.O.) no solo, segundo a classificação do Boletim SOJA FMT</strong>
                    <RadioGroup className="form__groupCheck" name="nivelMO" value={nivelMO} onChange={this.handleChangeTest}>
                        <FormControlLabel value="muitobaixo" className="checkboxMain" control={<Radio color="primary"/>} label="Muito Baixo" />
                        <FormControlLabel value="baixo" className="checkboxMain" control={<Radio  color="primary"/>} label="Baixo" />
                        <FormControlLabel value="medio" className="checkboxMain" control={<Radio color="primary"/>} label="Médio" />
                        <FormControlLabel value="alto" className="checkboxMain" control={<Radio color="primary"/>} label="Alto" />
                        <FormControlLabel value="muitoalto" className="checkboxMain" control={<Radio color="primary"/>} label="Muito Alto" />
                    </RadioGroup>
                </article>
                <div className="articleDif">
                    <div>
                        <strong>● Época/Forma de Aplicação TNCM</strong>
                        <div className="form__groupCheck">
                            <FormControlLabel checked={prePlantio} onChange={this.handleChangeCheck} className="checkboxMain" name="prePlantio" value="end" 
                                                control={<Checkbox color="primary" />} label="Pré-Plantio/PAT com Dessecação" labelPlacement="end"/>
                            <FormControlLabel checked={plantio} onChange={this.handleChangeCheck} className="checkboxMain" name="plantio" value="end" 
                                                control={<Checkbox color="primary" />} label="Plantio/PDS com Aplic Sulco Plantio" labelPlacement="end"/>
                            <FormControlLabel checked={posPlantio} onChange={this.handleChangeCheck} className="checkboxMain" name="posPlantio" value="end" 
                                                control={<Checkbox color="primary" />} label="Pós E/PAT com Aplicação Foliar com Defensivos Proteção" labelPlacement="end"/>
                            <div className="form__groupCheck">
                            <FormControlLabel checked={primeiraAp} onChange={this.handleChangeCheck} className="checkboxMain" name="primeiraAp" value="end" 
                                                control={<Checkbox disabled={!this.state.posPlantio} color="primary" />} label="1ª aplicação (V4 - V6)" labelPlacement="end"/>
                            <FormControlLabel checked={segundaAp} onChange={this.handleChangeCheck} className="checkboxMain" name="segundaAp" value="end" 
                                                control={<Checkbox disabled={!this.state.posPlantio} color="primary" />} label="2ª aplicação (Pré - Flor)" labelPlacement="end"/>
                            <FormControlLabel checked={terceiraAp} onChange={this.handleChangeCheck} className="checkboxMain" name="terceiraAp" value="end" 
                                                control={<Checkbox disabled={!this.state.posPlantio} color="primary" />} label="3ª aplicação (Início Grãos)" labelPlacement="end"/>
                            </div>
                        </div>
                    </div>
                    <div>
                    <strong>● Dosagem de TNCM medido em kgs/ha</strong>
                        <div>
                            <RadioGroup className="form__groupCheck" row name="dosagemPre" value={dosagemPre} onChange={this.handleChangeTest}>
                                <FormControlLabel className="checkboxMain" value="4.0" control={<Radio disabled={!this.state.prePlantio} color="primary"/>} 
                                                    label="4.0" labelPlacement="end"/>
                                <FormControlLabel className="checkboxMain" value="6.0" control={<Radio disabled={!this.state.prePlantio} color="primary"/>} 
                                                    label="6.0" labelPlacement="end"/>
                                <FormControlLabel className="checkboxMain" value="8.0" control={<Radio disabled={!this.state.prePlantio} color="primary"/>} 
                                                    label="8.0" labelPlacement="end"/>
                            </RadioGroup>
                            <RadioGroup className="form__groupCheck" row name="dosagemPlantio" value={dosagemPlantio} onChange={this.handleChangeTest}>
                                <FormControlLabel className="checkboxMain" value="2.0" control={<Radio disabled={!this.state.plantio} color="primary"/>} 
                                                    label="2.0" labelPlacement="end"/>
                                <FormControlLabel className="checkboxMain" value="3.0" control={<Radio disabled={!this.state.plantio} color="primary"/>} 
                                                    label="3.0" labelPlacement="end"/>
                                <FormControlLabel className="checkboxMain" value="4.0" control={<Radio disabled={!this.state.plantio} color="primary"/>} 
                                                    label="4.0" labelPlacement="end"/>
                            </RadioGroup>
                            <div className="divSingle">
                                <RadioGroup className="form__groupCheck" row name="dosagemPosPri" value={dosagemPosPri} onChange={this.handleChangeTest}>
                                    <FormControlLabel className="checkboxMain" value="0.25" control={<Radio disabled={!this.state.primeiraAp} 
                                                        color="primary"/>} label="0.250" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.5" control={<Radio disabled={!this.state.primeiraAp} 
                                                        color="primary"/>} label="0.500" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.75" control={<Radio disabled={!this.state.primeiraAp} 
                                                        color="primary"/>} label="0.750" labelPlacement="end"/>
                                </RadioGroup>
                                <RadioGroup className="form__groupCheck" row name="dosagemPosSeg" value={dosagemPosSeg} onChange={this.handleChangeTest}>
                                    <FormControlLabel className="checkboxMain" value="0.25" control={<Radio disabled={!this.state.segundaAp} 
                                                        color="primary"/>} label="0.250" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.5" control={<Radio disabled={!this.state.segundaAp} 
                                                        color="primary"/>} label="0.500" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.75" control={<Radio disabled={!this.state.segundaAp} 
                                                        color="primary"/>} label="0.750" labelPlacement="end"/>
                                </RadioGroup>
                                <RadioGroup className="form__groupCheck" row name="dosagemPosTer" value={dosagemPosTer} onChange={this.handleChangeTest}>
                                    <FormControlLabel className="checkboxMain" value="0.25" control={<Radio disabled={!this.state.terceiraAp} 
                                                        color="primary"/>} label="0.250" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.5" control={<Radio disabled={!this.state.terceiraAp} 
                                                        color="primary"/>} label="0.500" labelPlacement="end"/>
                                    <FormControlLabel className="checkboxMain" value="0.75" control={<Radio disabled={!this.state.terceiraAp} 
                                                        color="primary"/>} label="0.750" labelPlacement="end"/>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <article>
                    <strong>● Redução extra em % de Adubação de P2O5 de acordo com o tempo de uso do TNCM</strong>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pré-Plantio:</FormLabel>
                        <RadioGroup className="form__groupCheck" row name="reducaoExtraPre" value={reducaoExtraPre} onChange={this.handleChangeTest}>
                            <FormControlLabel className="checkboxMain" value="0" control={<Radio
                                                color="primary"/>} label="1º ano: 0" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="5" control={<Radio  
                                                color="primary"/>} label="2º ano: 5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="10" control={<Radio
                                                color="primary"/>} label="3º ano: 10" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="12.5" control={<Radio 
                                                color="primary"/>} label="4º ano: 12.5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="13.75" control={<Radio  
                                                color="primary"/>} label="5º ano: 13.75" labelPlacement="end"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pós-Plantio:</FormLabel>
                        <RadioGroup className="form__groupCheck" row name="reducaoExtraPos" value={reducaoExtraPos} onChange={this.handleChangeTest}>
                            <FormControlLabel className="checkboxMain" value="0" control={<Radio
                                                color="primary"/>} label="1º ano: 0" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="2.5" control={<Radio  
                                                color="primary"/>} label="2º ano: 2.5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="5" control={<Radio
                                                color="primary"/>} label="3º ano: 5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="6.25" control={<Radio 
                                                color="primary"/>} label="4º ano: 6.25" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="6.875" control={<Radio  
                                                color="primary"/>} label="5º ano: 6.875" labelPlacement="end"/>
                        </RadioGroup>
                    </FormControl>
                </article>
                <article>
                    <strong>● Aumento extra em % de Produtividade de acordo com o tempo de uso do TNCM</strong>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pré-Plantio:</FormLabel>
                        <RadioGroup className="form__groupCheck" row name="aumentoExtraPre" value={aumentoExtraPre} onChange={this.handleChangeTest}>
                            <FormControlLabel className="checkboxMain" value="0" control={<Radio
                                                color="primary"/>} label="1º ano: 0" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="2.5" control={<Radio  
                                                color="primary"/>} label="2º ano: 2.5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="5" control={<Radio
                                                color="primary"/>} label="3º ano: 5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="6.25" control={<Radio 
                                                color="primary"/>} label="4º ano: 6.25" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="6.875" control={<Radio  
                                                color="primary"/>} label="5º ano: 6.875" labelPlacement="end"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pós-Plantio:</FormLabel>
                        <RadioGroup className="form__groupCheck" row name="aumentoExtraPos" value={aumentoExtraPos} onChange={this.handleChangeTest}>
                            <FormControlLabel className="checkboxMain" value="0" control={<Radio
                                                color="primary"/>} label="1º ano: 0" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="5" control={<Radio  
                                                color="primary"/>} label="2º ano: 5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="10" control={<Radio
                                                color="primary"/>} label="3º ano: 10" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="12.5" control={<Radio 
                                                color="primary"/>} label="4º ano: 12.5" labelPlacement="end"/>
                            <FormControlLabel className="checkboxMain" value="13.75" control={<Radio  
                                                color="primary"/>} label="5º ano: 13.75" labelPlacement="end"/>
                        </RadioGroup>
                    </FormControl>
                </article>
                <Button onClick={this.calcular} variant="contained">CALCULAR</Button>
                <article >
                    <Typography variant="h6" gutterBottom>
                        {`Redução ${this.state.reducaoTotal} `}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {`Aumento ${this.state.aumentoTotal} `}
                    </Typography>
                </article>
            </div>
        );
    }
}

/*{`Área ${area} `}
                        {`Produtividade ${produtividadeRealista} `}
                        {`Calculo P2O5 ${calculop2} `}
                        {`Nivel Fosforo ${nivelFosf} `}
                        {`Nivel MO ${nivelMO} `}
                        {`Redução Pré ${reducaoExtraPre} `}
                        {`Redução Pós ${reducaoExtraPos} `}
                        {`Aumento Pré ${aumentoExtraPre} `}
                        {`Aumento Pós ${aumentoExtraPos} `}*/