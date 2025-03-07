import { collection, addDoc, updateDoc, doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export const createConsultation = async (consultationData) => {
  try {
    const docRef = await addDoc(collection(db, 'consultations'), {
      ...consultationData,
      status: 'scheduled',
      paymentStatus: 'pending',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating consultation:', error);
    throw error;
  }
};

export const updateConsultationPayment = async (consultationId, paymentId) => {
  try {
    const consultationRef = doc(db, 'consultations', consultationId);
    await updateDoc(consultationRef, {
      paymentStatus: 'paid',
      stripePaymentId: paymentId,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating consultation payment:', error);
    throw error;
  }
};

export const getConsultation = async (consultationId) => {
  try {
    const consultationRef = doc(db, 'consultations', consultationId);
    const consultationSnap = await getDoc(consultationRef);
    
    if (consultationSnap.exists()) {
      return consultationSnap.data();
    } else {
      throw new Error('Consultation not found');
    }
  } catch (error) {
    console.error('Error getting consultation:', error);
    throw error;
  }
};
