import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text className="text-red-500">Section #1</Text>
		<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvqM1CMr14I3jWgpzBMtThqthtY1i_fHCfsw43A33A6J7MO2ELG5BHKv5sUIQqRRpBR4&usqp=CAU'></Image>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;