import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {useForm, Controller } from "react-hook-form";
import Button from "./Button";
import TransportOption from "./TransportOption";
import TransportGroup from "./TransportGroup";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRef} from "react";

interface AddTravelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const transportValues = ['walking', 'bicycle', 'motorcycle', 'car', 'bus', 'train', 'ship', 'plane'];

const validationSchema = yup.object().shape({
    country: yup.string().required('Kraj jest wymagany'),
    city: yup.string().required('Miasto jest wymagane'),
    startDate: yup.string().required('Data rozpoczęcia jest wymagana'),
    endDate: yup.string().required('Data zakończenia jest wymagana'),
    transport: yup.string().oneOf(transportValues, 'Niewłaściwy środek transportu').required('Wymagany środek transportu'),
})

export default function AddTravelModal({isOpen, onClose}: AddTravelModalProps) {

    const { control, handleSubmit, formState: { errors }, setValue, reset } = useForm({
        defaultValues: {
            country: '',
            city: '',
            startDate: null,
            endDate: null,
            transport: '',
        },
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: any) => console.log(data);

    const handleTransportChange = (value: string) => {
        setValue('transport', value);
    }

    const handleClose = () => {
        onClose();
        reset();
    }

    return (
        <Modal visible={isOpen} transparent={true} animationType={'slide'}>
            <View style={styles.backdrop}>
                <TouchableWithoutFeedback onPress={handleClose}><View style={styles.backdropClose}></View></TouchableWithoutFeedback>
            <View style={styles.container}>
                <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
                <FontAwesome name={'close'} size={25}/>
                </TouchableOpacity>
                    <Text style={styles.modalTitle}>Dodaj podróż</Text>
                <View style={styles.form}>
                    <Text style={styles.error}>{errors.country?.message}</Text>
                 <Controller control={control} render={({field: {onChange, onBlur, value}}) => (
                     <TextInput style={styles.input}  placeholder={'Kraj'} onBlur={onBlur} onChangeText={onChange} value={value}/>
                 )} name={"country"}/>
                    <Text style={styles.error}>{errors.city?.message}</Text>
                    <Controller control={control} render={({field: {onChange, onBlur, value}}) => (
                        <TextInput style={styles.input} placeholder={'Miasto'} onBlur={onBlur} onChangeText={onChange} value={value}/>
                    )} name={'city'}/>
                    <Text style={styles.error}>{errors.startDate?.message}</Text>
                    <Controller control={control} render={({field: {onChange, onBlur, value}}) => (
                        <TextInput style={styles.input} placeholder={'Data rozpoczęcia'} onBlur={onBlur} onChangeText={onChange} value={value}/>
                    )} name={'startDate'}/>
                    <Text style={styles.error}>{errors.endDate?.message}</Text>
                    <Controller control={control} render={({field: {onChange, onBlur, value}}) => (
                        <TextInput style={styles.input} placeholder={'Data zakończenia'} onBlur={onBlur} onChangeText={onChange} value={value}/>
                    )} name={'endDate'}/>
                    <Text style={styles.error}>{errors.transport?.message}</Text>
                    <Controller control={control} render={({field}) => (
                        <TransportGroup {...field} onChange={handleTransportChange}>
                            <TransportOption type={'walking'}/>
                            <TransportOption type={'bicycle'}/>
                            <TransportOption type={'motorcycle'}/>
                            <TransportOption type={'car'}/>
                            <TransportOption type={'bus'}/>
                            <TransportOption type={'train'}/>
                            <TransportOption type={'ship'}/>
                            <TransportOption type={'plane'}/>
                        </TransportGroup>
                    )} name={'transport'} defaultValue={''}/>
                    <Button style={{marginTop: 15}} onPress={handleSubmit(onSubmit)}>Dodaj podróż</Button>
                </View>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'

    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(00, 00, 00, 0.4)',
        justifyContent: 'flex-end'
    },
    backdropClose: {
        width: '100%',
        height: '40%'
    },
    closeIcon: {
        alignSelf: 'flex-end',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    form: {
      display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 4
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        width: '75%',
        height: 35,
        fontSize: 16,
        padding: 5
    },
    error: {
        color: '#ff0000'
    }
})