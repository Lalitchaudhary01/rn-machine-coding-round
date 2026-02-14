import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is this platform about?",
      answer:
        "This platform helps users manage their tasks efficiently with smart organization, categories, and productivity tools."
    },
    {
      question: "Is this application free to use?",
      answer:
        "Yes, the basic version is free. Some advanced features may require a premium subscription."
    },
    {
      question: "How can I create an account?",
      answer:
        "You can create an account by signing up with your email and setting a secure password."
    }
  ]

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null) // close if already open
    } else {
      setOpenIndex(index) // open new
    }
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 15 }}>FAQs</Text>

      {faqData.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: 10,
            borderWidth: 1,
            borderRadius: 6,
            padding: 10
          }}
        >
          <TouchableOpacity onPress={() => toggleFAQ(index)}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {item.question}
            </Text>
          </TouchableOpacity>

          {openIndex === index && (
            <Text style={{ marginTop: 8, color: 'gray' }}>
              {item.answer}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

export default Faq